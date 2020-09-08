import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  toggleNavbar = false;

  constructor() { }

  ngOnInit(): void {
    this.sidenNavResponsive();
    this.toggleSidenav();
  }

  toggleSidenav() {
    var sideNav = document.getElementById('sideNav');
    
    this.toggleNavbar =  !this.toggleNavbar;
  
    if (this.toggleNavbar) {
      sideNav.style.transform = "translatex(-260px)";
    }else{
      sideNav.style.transform = "translatex(0px)";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidenNavResponsive();
  }
  sidenNavResponsive() {
    var sideNav = document.getElementById('sideNav');
    var content = document.getElementById('content');
    var toggleBtn = document.getElementById('toggleBtn');
    if (screen.width > 768) {
      content.style.width = "calc(100% - 260px)";
      content.style.marginLeft = "260px"
      toggleBtn.style.display = "none";
      sideNav.style.transform = "translatex(0px)";

    } else {
      
      content.style.width = "calc(100% - 0px)";
      content.style.marginLeft = "0px"
      toggleBtn.style.display = "block";
      sideNav.style.transform = "translatex(-260px)";
    }
  }
}
