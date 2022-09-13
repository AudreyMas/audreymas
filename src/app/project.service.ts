import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    this.messageService.add('ProjectService: fetched projects');
    return projects;
  }

  getProject(id: number): Observable<Project> {
    // For now, assume that a project with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const project = PROJECTS.find(h => h.id === id)!;
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(project);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/