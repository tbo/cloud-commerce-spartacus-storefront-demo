import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StorefrontModule } from "@spartacus/storefront";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StorefrontModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
