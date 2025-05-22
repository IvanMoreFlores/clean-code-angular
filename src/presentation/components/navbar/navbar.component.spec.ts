// import { render, screen } from '@testing-library/angular';
// import { NavbarComponent } from './navbar.component';
// import { Router } from '@angular/router';
// import { AuthService } from '../../auth/auth.service';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { of } from 'rxjs';

// describe('NavbarComponent', () => {
//   let mockRouter: any;
//   let mockAuthService: any;
//   const initialState = { products: [{}, {}, {}] };

//   beforeEach(async () => {
//     mockRouter = {
//       navigate: jest.fn(),
//     };
//     mockAuthService = {
//       isAuthenticated: jest.fn().mockReturnValue(true),
//     };

//     localStorage.setItem('firstName', 'John');
//     localStorage.setItem('lastName', 'Doe');

//     await render(NavbarComponent, {
//       providers: [
//         provideMockStore({ initialState }),
//         { provide: Router, useValue: mockRouter },
//         { provide: AuthService, useValue: mockAuthService },
//       ],
//     });
//   });

//   afterEach(() => {
//     localStorage.clear();
//   });

//   it('should create the component', () => {
//     const navbarComponent = screen.getByTestId('navbar');
//     expect(navbarComponent).toBeTruthy();
//   });

//   it("should display the user's name", () => {
//     const userName = screen.getByText('John Doe');
//     expect(userName).toBeTruthy();
//   });
// });
