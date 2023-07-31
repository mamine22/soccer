import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { CapEventComponent } from './components/cap-event/cap-event.component';
import { InfoComponent } from './components/info/info.component';
import { ArticlComponent } from './components/articl/articl.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ReversePipe } from './reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './components/search/search.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { StoreComponent } from './components/store/store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoreTableComponent } from './components/store-table/store-table.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { SearshTeamComponent } from './components/searsh-team/searsh-team.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ProfilComponent } from './components/profil/profil.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DatePipe } from './pipes/date.pipe';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { SportScoreComponent } from './components/sport-score/sport-score.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    CapEventComponent,
    HeaderComponent,
    InfoComponent,
    ArticlComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    MatchsTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchComponent,
    PlayersComponent,
    ContactComponent,
    MatchResultComponent,
    MatchesComponent,
    PlayerComponent,
    MatchInfoComponent,
    EditTeamComponent,
    TeamInfoComponent,
    ReversePipe,
    AsterixPipe,
    SearchComponent,
    StadiumComponent,
    StadiumTableComponent,
    StoreComponent,
    EditStoreComponent,
    StoreTableComponent,
    EditStadiumComponent,
    SearshTeamComponent,
    EditMatchComponent,
    EditPlayerComponent,
    ProfilComponent,
    WeatherComponent,
    DatePipe,
    ReclamationComponent,
    AddCommentComponent,
    SportScoreComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
