import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoworkingRoutingModule } from './coworking-routing.module';
import { CoworkingPageComponent } from './coworking-home/coworking-home.component';
import { AmbassadorPageComponent } from './ambassador-home/ambassador-home.component';
import { MatCardModule } from '@angular/material/card';
import { CoworkingReservationCard } from './widgets/coworking-reservation-card/coworking-reservation-card';
import { CoworkingDropInCard } from './widgets/dropin-availability-card/dropin-availability-card.widget';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { ReservationComponent } from './reservation/reservation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NewReservationPageComponent } from './room-reservation/new-reservation-page/new-reservation-page.component';
import { RoomReservationWidgetComponent } from './widgets/room-reservation-table/room-reservation-table.widget';
import { ConfirmReservationComponent } from './room-reservation/confirm-reservation/confirm-reservation.component';
import { DateSelector } from './widgets/date-selector/date-selector.widget';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OperatingHoursDialog } from './widgets/operating-hours-dialog/operating-hours-dialog.widget';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AmbassadorXLComponent } from './ambassador-home/ambassador-xl/ambassador-xl.component';
import { AmbassadorRoomComponent } from './ambassador-home/ambassador-room/ambassador-room.component';
import { ReservationFactsWidget } from './widgets/reservation-facts/reservation-facts.widget';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChatBot } from './widgets/chat-bot/chat-bot.widget';

@NgModule({
  declarations: [
    NewReservationPageComponent,
    ChatBot,
    RoomReservationWidgetComponent,
    CoworkingPageComponent,
    ReservationComponent,
    AmbassadorPageComponent,
    AmbassadorXLComponent,
    AmbassadorRoomComponent,
    CoworkingDropInCard,
    CoworkingReservationCard,
    ConfirmReservationComponent,
    NewReservationPageComponent,
    DateSelector,
    OperatingHoursDialog,
    ReservationFactsWidget
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CoworkingRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    AsyncPipe,
    AsyncPipe,
    SharedModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class CoworkingModule {}
