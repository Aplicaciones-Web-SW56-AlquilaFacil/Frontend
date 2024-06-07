class Card {
    constructor(id=null,location=null,imgUrl=null, description=null, pricePerNight=null, comment=null, address=null, apartment=null, city=null, district=null, country=null, created_at=null, updated_at=null) {
        this._id = id;
        this._location = location;
        this._imgUrl = imgUrl;
        this._description = description;
        this._pricePerNight = pricePerNight;
        this._comment = comment;
        this._address = address;
        this._apartment = apartment;
        this._city = city;
        this._district = district;
        this._country = country;
        this._created_at = created_at;
        this._updated_at = updated_at;

    }

    get id() {
        return this._id;
    }
    get location() {
        return this._location;
    }
    get imgUrl() {
        return this._imgUrl;
    }
    get description() {
        return this._description;
    }
    get pricePerNight() {
        return this._pricePerNight;
    }
    get comment() {
        return this._comment;
    }
    get address() {
        return this._address;
    }
    get apartment() {
        return this._apartment;
    }
    get city() {
        return this._city;
    }
    get district() {
        return this._district;
    }
    get country() {
        return this._country;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
    set id(id) {
        this._id = id;
    }
    set location(location) {
        this._location = location
    }
    set imgUrl(imgUrl) {
        this._imgUrl = imgUrl
    }
    set description(description) {
        this._description = description
    }
    set pricePerNight(pricePerNight) {
        this._pricePerNight = pricePerNight
    }
    set comment(comment) {
        this._comment = comment
    }
    set address(address) {
        this._address = address
    }
    set apartment(apartment) {
        this._apartment = apartment
    }
    set city(city) {
        this._city = city
    }
    set district(district) {
        this._district = district
    }
    set country(country) {
        this._country = country
    }

}