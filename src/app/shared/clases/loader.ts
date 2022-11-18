export class Loader {
  loading = true;

  on() {
    this.loading = false;
  }

  off() {
    this.loading = true;
  }
}
