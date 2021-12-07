function CanDrive(hasDrivingLiscence, isTired, isSober) {

    if (!hasDrivingLiscence) {
        return "You cannot drive";
    }
    else if (isTired == true || isSober == false) {
        return "You shouldn't drive";
    }
    else if (isTired == false && isSober == true && hasDrivingLiscence == true) {
        return "You can drive";
    }


}

module.exports = CanDrive;
