import { Routes } from '@angular/router';
import {
  
} from './smallworld.components';
import { Component } from '@angular/core';
export const applicationRoutes: Routes = [
    { path: '', redirectTo: 'doc-saab', pathMatch: 'full' },
];

export class SmallWorldRoutes {
  public static ROUTES = applicationRoutes;
}
