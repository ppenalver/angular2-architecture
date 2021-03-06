/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule, ApplicationRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { EgeoModule } from '@stratio/egeo';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { ConfigService, INITIALIZER, TRANSLATE_CONFIG } from '@app/core';
import { SharedModule } from '@app/shared';
import { Error404Component } from '@app/errors/error-404/error-404.component';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent, Error404Component ],
   imports: [
      AppRouter,
      BrowserModule,
      EgeoModule.forRoot(),
      HttpModule,

      SharedModule,
      TranslateModule.forRoot(TRANSLATE_CONFIG)
   ],
   providers: [
      ConfigService,
      INITIALIZER
   ]
})

export class AppModule {}
