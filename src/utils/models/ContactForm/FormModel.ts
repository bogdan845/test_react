export class FormModel {
    name: string;
    category: string;
    phone: string;
    city: string;
    email: string;
    message: string;

    constructor(public data: any) {
        this.name = data.name || "";
        this.category = data.category || "";
        this.phone = data.phone || "";
        this.city = data.city || "";
        this.email = data.mail || "";
        this.message = data.message || ""
    }

    public readyData() {
        return {
            name: this.name,
            category: this.category,
            phone: this.phone,
            city: this.city,
            email: this.email,
            message: this.message
        }
    }
}