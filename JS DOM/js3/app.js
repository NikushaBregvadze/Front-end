const findMyLocation = () => {
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(longitude + '' + latitude);

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                status.textContent = data.principalSubdivision;

                
                const jsonData = JSON.stringify(data);

                
                const blob = new Blob([jsonData], { type: 'application/json' });

                
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = 'location_data.json';
                downloadLink.click();
            })
            .catch(error => {
                console.error('Error fetching reverse geocoding data:', error);
            });
            // let x = document.querySelector('body')
            // if(status.textContent == data.principalSubdivision;) {
            //     x.style.display = 'none'
            // }

    };

    const error = () => {
        status.textContent = 'Unable to Find Location';
    };

    navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector('.find-state').addEventListener('click', findMyLocation);


