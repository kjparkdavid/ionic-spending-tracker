import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import * as PouchDB from "pouchdb";
import cordovaSqlitePlugin from "pouchdb-adapter-cordova-sqlite";

@Injectable()
export class SpendingService {
  public pdb;
  public spending;

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB("spending.db", { adapter: "cordova-sqlite" });
  }
}
