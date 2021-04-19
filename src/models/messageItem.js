export default class MessageItem {
    constructor(sender, receiver, message, type) {
        this._sender = sender;
        this._receiver = receiver;
        this._message = message;
        this._type = type;
    }

    sender: string;
    receiver: string;
    message: string;
    type: string;

    get sender() {
        return this._sender;
    }

    set sender(value) {
        this._sender = value;
    }

    get receiver() {
        return this._receiver;
    }

    set receiver(value) {
        this._receiver = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}
