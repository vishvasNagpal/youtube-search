import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showList = false;
  data = [
    {
      "id": "123-s2-546",
      "name": "John Jacobs",
      "items": [
        "bucket",
        "bottle"
      ],
      "address": "1st Cross, 9th Main, abc Apartment",
      "pincode": "5xx012"
    },
    {
      "id": "123-s3-146",
      "name": "David Mire",
      "items": [
        "Bedroom Set"
      ],
      "address": "2nd Cross, BTI Apartment",
      "pincode": "4xx012"
    },
    {
      "id": "223-a1-234",
      "name": "Soloman Marshall",
      "items": [
        "bottle"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "121-s2-111",
      "name": "Ricky Beno",
      "items": [
        "Mobile Set"
      ],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "123-p2-246",
      "name": "Sikander Singh",
      "items": [
        "Air Conditioner"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "b23-s2-321",
      "name": "Ross Wheeler",
      "items": [
        "Mobile"
      ],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "113-n2-563",
      "name": "Ben Bish",
      "items": [
        "Kitchen Set",
        "Chair"
      ],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "323-s2-112",
      "name": "John Michael",
      "items": [
        "Refrigerator"
      ],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "abc-34-122",
      "name": "Jason Jordan",
      "items": [
        "Mobile"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    }
  ];
  results = [
    {
      "id": "123-s2-546",
      "name": "John Jacobs",
      "items": [
        "bucket",
        "bottle"
      ],
      "address": "1st Cross, 9th Main, abc Apartment",
      "pincode": "5xx012"
    },
    {
      "id": "123-s3-146",
      "name": "David Mire",
      "items": [
        "Bedroom Set"
      ],
      "address": "2nd Cross, BTI Apartment",
      "pincode": "4xx012"
    },
    {
      "id": "223-a1-234",
      "name": "Soloman Marshall",
      "items": [
        "bottle"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "121-s2-111",
      "name": "Ricky Beno",
      "items": [
        "Mobile Set"
      ],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "123-p2-246",
      "name": "Sikander Singh",
      "items": [
        "Air Conditioner"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "b23-s2-321",
      "name": "Ross Wheeler",
      "items": [
        "Mobile"
      ],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "113-n2-563",
      "name": "Ben Bish",
      "items": [
        "Kitchen Set",
        "Chair"
      ],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "323-s2-112",
      "name": "John Michael",
      "items": [
        "Refrigerator"
      ],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "abc-34-122",
      "name": "Jason Jordan",
      "items": [
        "Mobile"
      ],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    }
  ];
  selectedItem = -1;

  constructor() {}

  ngOnInit() {
  }
  onFocus(e) {
    this.showList = true;
  }
  onChange(e) {
    let val = e.target.value;
    val = val.toLowerCase();
    this.filter(val);
  }
  filter(val) {
    this.results = this.data.filter((item) => (
      item.name.toLowerCase().includes(val) ||
      item.address.toLowerCase().includes(val)
    ));
  }
  onMouseMove(param) {
    this.selectedItem = param.index;
  }
  onKeyPress(param) {
    if (param.index >= this.results.length) {
      this.selectedItem = this.results.length - 1;
    } else if (param.index < 0) {
      this.selectedItem = 0;
    } else {
      this.selectedItem = param.index;
    }
  }
  onBlur(e) {
    this.showList = false;
  }

}
