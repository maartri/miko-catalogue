import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  books: Array<any> = [
    {
      book:1,
      name: 'Lord of the Rings',
      author: 'JRR Tolkien',
      picture: 'lotr.jpg'
    },
    {
      book:2,
      name: 'Harry Potter',
      author: 'JK Rowling',
      picture: 'harry.jpg'
    },
    {
      book:3,
      name: 'Little Duckling',
      author: 'Mark Trinidad',
      picture: 'duckling.webp'
    },
    {
      book:4,
      name: 'Buster the Cat',
      author: 'Anna Mae Trinidad',
      picture: 'buster.jpg'
    },
    {
      book:5,
      name: 'Puss in Boots',
      author: 'Michael Aris Trinidad',
      picture: 'harry.jpg'
    },
    {
      book:6,
      name: 'Guiness Book of World Records',
      author: 'America',
      picture: 'harry.jpg'
    },
    {
      book:7,
      name: 'How I beat the crap out of your brain',
      author: 'Henry McKinley',
      picture: 'harry.jpg'
    }
  ];


  book: any = {
    name: '',
    author: ''
  }

  view: number = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  toLogin(){
    this.router.navigate(['login']);
  }

  logout(){
    this.router.navigate(['login']);
  }

  showBooks(){
    this.view = 1;
  }

  showCatalogue(){
    this.view = 0 ;
  }

  addBook(){

      this.books.push({
        book:7,
        name: this.book.name,
        author: this.book.author,
        picture: 'harry.jpg'
      });

      this.showCatalogue();
  }

  delete(book: any){
    console.log(book)

    var index = this.books.findIndex(x => x.book == book.book);

    this.books.splice(index, 1);
  }
}
