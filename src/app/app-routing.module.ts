import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchComponent } from './components/search/search.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { StoreComponent } from './components/store/store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { SearshTeamComponent } from './components/searsh-team/searsh-team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ProfilComponent } from './components/profil/profil.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { SportScoreComponent } from './components/sport-score/sport-score.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signin",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin",component:AdminComponent},
  {path:"addMatch",component:AddMatchComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"addPlayer",component:AddPlayerComponent},
  {path:"matches",component:MatchesComponent},
  {path:"players",component:PlayersComponent},
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"editTeam/:id",component:EditTeamComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"searsh",component:SearchComponent},
  {path:"addStadium",component:StadiumComponent},
  {path:"addStore",component:StoreComponent},
  {path:"editStore/:name",component:StoreComponent},
  {path:"editStadium/:id",component:EditStadiumComponent},
  {path:"searsh-team",component:SearshTeamComponent},
  {path:"editMatch/:id",component:EditMatchComponent},
  {path:"editPlayer/:id",component:EditPlayerComponent},
  {path:"profil/:id",component:ProfilComponent},
  {path:"weather",component:WeatherComponent},
  {path:"reclamation",component:ReclamationComponent},
  {path:"addComment",component:AddCommentComponent},
  {path:"sport-score",component:SportScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
