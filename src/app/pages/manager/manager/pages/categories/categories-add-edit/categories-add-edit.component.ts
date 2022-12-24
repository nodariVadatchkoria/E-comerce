import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../../../../core/services ";
import {Category} from "../../../../../../core/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap,} from "rxjs";

@Component({
  selector: 'app-categories-add-edit',
  templateUrl: './categories-add-edit.component.html',
  styleUrls: ['./categories-add-edit.component.scss']
})
export class CategoriesAddEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
  })

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.categoriesService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue(res)
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.id) {
      this.categoriesService.update(this.form.value.id && this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/manager/categories'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      this.categoriesService.create(this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/manager/categories'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }
}
