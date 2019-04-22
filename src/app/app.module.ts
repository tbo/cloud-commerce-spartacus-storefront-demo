import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StorefrontModule } from "@spartacus/storefront";
import { translations } from "@spartacus/storefront";

const config = {
  backend: {
    occ: {
      baseUrl:
        "https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com"
    }
  },
  site: {
    baseSite: "electronics"
  },
  i18n: {
    resources: translations
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorefrontModule.withConfig(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
