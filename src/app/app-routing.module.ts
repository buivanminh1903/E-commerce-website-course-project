import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SectionComponent } from './components/section/section.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { CategorieslistComponent } from './components/categorieslist/categorieslist.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'detail/:Id', component: DetailComponent },
  { path: 'category/:Category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'allcategories', component: CategorieslistComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-details/:Id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
