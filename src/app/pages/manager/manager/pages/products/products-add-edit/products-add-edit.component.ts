import { Component, OnInit } from '@angular/core';
import {CategoriesService, ProductsService} from "../../../../../../core/services ";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, of, switchMap} from "rxjs";
import {Category, Product} from "../../../../../../core/interfaces";

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit {
  categories$: Observable<Category[]>= this.categoriesService.getAll()
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  })

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.productsService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.id) {
      this.productsService.update(this.form.value.id && this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      this.productsService.create(this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }

}
