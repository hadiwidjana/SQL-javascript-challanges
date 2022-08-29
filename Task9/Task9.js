const apartmentFacilities = [
    {
        cluster: "A",
        facilities: { mosque: true, park: false, gym: true},
    },
    {
        cluster: "B",
        facilities: { mosque: false, park: false, gym: true},
    },
    {
        cluster: "C",
        facilities: { mosque: true, park: true, gym: false},
    },
    {
        cluster: "D",
        facilities: { mosque: false, park: true, gym: false},
    },
    {
        cluster: "E",
        facilities: { mosque: false, park: true, gym: true},
    },
];


function getApartmentByFacility(facility){

    let searchResult = [];

    for (let i=0; i<apartmentFacilities.length; i++){
        if (apartmentFacilities[i].facilities[facility] == true) {
            searchResult.push(apartmentFacilities[i].cluster);
        }
    }

    return searchResult;
}

console.log('find cluster by park');
console.log(getApartmentByFacility("park"));

console.log('find cluster by mosque');
console.log(getApartmentByFacility("mosque"));

console.log('find cluster by gym');
console.log(getApartmentByFacility("gym"));