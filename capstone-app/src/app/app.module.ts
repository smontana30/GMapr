import { PhotosModule } from './modules/photos/photos.module';
import { MapsModule } from './modules/maps/maps.module';
import { HistoryModule } from './modules/history/history.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HistoryModule,
    PhotosModule,
    MapsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
