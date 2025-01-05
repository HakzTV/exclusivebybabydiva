// src/components/Map.js

const Map = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.606780617578!2d-0.11377652592427094!3d5.624922932954678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf850fcbb54d49%3A0x44fab4d41da20473!2sExclusiveBabydivaFl!5e0!3m2!1sen!2sgh!4v1728664214216!5m2!1sen!2sgh"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
        ></iframe>
    );
};

export default Map;
