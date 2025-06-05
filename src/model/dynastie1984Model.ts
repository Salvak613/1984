export class Dynastie1984Model {
  constructor(
    private _id: number | null = null,
    private _nom: string,
    private _age: number,
    private _profession: string,
    private _origine: string,
    private _affiliation: string,
    private _passeport: boolean,
    private _numeroPasseport: string | null,
    private _slogan: string,
    private _image: string,
    private _notes: string | null,
    private _valide: boolean
  ) {}

  get id(): string {
    return this._id !== null ? this._id.toString() : "";
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get profession(): string {
    return this._profession;
  }

  set profession(value: string) {
    this._profession = value;
  }

  get origine(): string {
    return this._origine;
  }

  set origine(value: string) {
    this._origine = value;
  }

  get affiliation(): string {
    return this._affiliation;
  }

  set affiliation(value: string) {
    this._affiliation = value;
  }

  get passeport(): boolean {
    return this._passeport;
  }

  set passeport(value: boolean) {
    this._passeport = value;
  }

  get numeroPasseport(): string | null {
    return this._numeroPasseport;
  }

  set numeroPasseport(value: string | null) {
    this._numeroPasseport = value;
  }

  get slogan(): string {
    return this._slogan;
  }

  set slogan(value: string) {
    this._slogan = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get notes(): string | null {
    return this._notes;
  }

  set notes(value: string | null) {
    this._notes = value;
  }

  get valide(): boolean {
    return this._valide;
  }

  set valide(value: boolean) {
    this._valide = value;
  }
}
