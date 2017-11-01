export interface Message {
  type: 'alert-info' | 'alert-success' | 'alert-danger';
  text: string;
}
