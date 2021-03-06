import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatChipsModule,
  MatTableModule,
  MatMenuModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatCheckboxModule } from '@angular/material';

// import components
import { ChallengeevaluationComponent } from './challengeevaluation/challengeevaluation.component';
import { ChallengeleaderboardComponent } from './challengeleaderboard/challengeleaderboard.component';
import { ChallengeoverviewComponent } from './challengeoverview/challengeoverview.component';
import { ChallengeparticipateComponent } from './challengeparticipate/challengeparticipate.component';
import { ChallengephasesComponent } from './challengephases/challengephases.component';
import { ChallengesettingsComponent } from './challengesettings/challengesettings.component';
import { ChallengesubmissionsComponent } from './challengesubmissions/challengesubmissions.component';
import { ChallengesubmitComponent } from './challengesubmit/challengesubmit.component';
import { ChallengeviewallsubmissionsComponent } from './challengeviewallsubmissions/challengeviewallsubmissions.component';
import { PhasecardComponent } from './challengephases/phasecard/phasecard.component';
import { ChallengeComponent } from './challenge.component';

// import module
import { ChallengeRoutingModule } from './challenge-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChallengelistModule } from '../publiclists/challengelist/challengelist.module';

@NgModule({
  declarations: [
    ChallengeComponent,
    ChallengesettingsComponent,
    ChallengeoverviewComponent,
    ChallengeevaluationComponent,
    ChallengephasesComponent,
    ChallengeparticipateComponent,
    ChallengeleaderboardComponent,
    ChallengesubmitComponent,
    ChallengesubmissionsComponent,
    ChallengeviewallsubmissionsComponent,
    PhasecardComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    ChallengelistModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [
    ChallengeComponent,
    ChallengesettingsComponent,
    ChallengeoverviewComponent,
    ChallengeevaluationComponent,
    ChallengephasesComponent,
    ChallengeparticipateComponent,
    ChallengeleaderboardComponent,
    ChallengesubmitComponent,
    ChallengesubmissionsComponent,
    ChallengeviewallsubmissionsComponent,
    PhasecardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ChallengeModule { }
