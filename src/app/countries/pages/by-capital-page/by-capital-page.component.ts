import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
