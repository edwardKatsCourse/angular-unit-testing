import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {AlertButtonComponent} from './alert-button.component';
import {By} from "@angular/platform-browser";
import {of} from "rxjs";
import {MessageService} from "../message.service";

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  let serviceStub: any;

  beforeEach(async(() => {

    serviceStub = {
      getContent: () => of("You are warned")
    };

    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
      providers: [{provide: MessageService, useValue: serviceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain 'warn'", () => {
    expect(component.content).toContain("warn");
  });

  it("expected severity level to be greater than 2", () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it("should have H1 tag in the alert button", () => {
    expect(
      de.query(By.css("h1"))
        .nativeElement
        .innerText).toBe("Alert button");
  });

  it("should toggle be truthy", () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it("should toggle async", fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it("should stub", () => {
    component.contentObservable.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe("You are warned");
    })
  })
});
