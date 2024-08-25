import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bfhl',
  templateUrl: './bfhl.component.html',
  styleUrls: ['./bfhl.component.css']
})
export class BfhlComponent {
  jsonInput: string = '';
  response: any = null;
  selectedFilters: string[] = [];
  error: string = '';

  constructor(private apiService: ApiService) { }

  onSubmit() {
    this.error = '';
    this.response = null;
    try {
      // Replace any smart quotes with standard quotes (if needed)
      let sanitizedJsonInput = this.jsonInput.replace(/[\u201C\u201D]/g, '"');

      // Parse the JSON input
      const parsedInput = JSON.parse(sanitizedJsonInput);

      // Validate the input structure
      if (!parsedInput || typeof parsedInput !== 'object' || !Array.isArray(parsedInput.data)) {
        throw new Error("Invalid JSON: 'data' should be an array.");
      }

      // Make API request
      this.apiService.postData(parsedInput).subscribe(
        data => {
          // Validate response structure
          if (data && typeof data === 'object') {
            this.response = data;
          } else {
            throw new Error("Invalid response format.");
          }
        },
        err => {
          // Type assertion to Error
          if (err instanceof Error) {
            this.error = `Error: ${err.message}`;
          } else {
            this.error = 'Error: An unknown error occurred';
          }
          console.error(err);
        }
      );
    } catch (err) {
      // Type assertion to Error
      if (err instanceof Error) {
        this.error = `Error: ${err.message || 'Invalid JSON input'}`;
      } else {
        this.error = 'Error: An unknown error occurred';
      }
      console.error(err);
    }
  }

  onFilterChange(filter: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedFilters.push(filter);
    } else {
      this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
    }
  }
}
