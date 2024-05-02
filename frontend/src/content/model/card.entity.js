class Card {
    constructor(id=null,location=null,imgUrl=null, description=null, pricePerNight=null) {
        this._id = id;
        this._location = location;
        this._imgUrl = imgUrl;
        this._description = description;
        this._pricePerNight = pricePerNight;
    }

    get id() {
        return this._id;
    }
    get imgUrl() {
        return this._imgUrl;
    }

    get location() {
        return this._location;
    }

    set location(newLocation) {
        this._location = newLocation;
    }
    get description() {
        return this._description;
    }
    get pricePerNight() {
        return this._pricePerNight;
    }

}