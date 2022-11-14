export class Loader {
  loading = false;

  on() {
    this.loading = true;
  }

  off() {
    this.loading = false;
  }
}
