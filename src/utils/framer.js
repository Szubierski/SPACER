const animations = {
	topInVariant1: {
		hidden: {
			opacity: 0,
			y: "-100px",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				duration: 0.5,
				type: "spring",
			},
		},
	},
	topInVariant2: {
		hidden: {
			opacity: 0,
			y: "-100px",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				type: "spring",
			},
		},
	},
	bottomInVariant: {
		hidden: {
			opacity: 0,
			y: "10px",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				duration: 0.5,
				type: "spring",
			},
		},
	},
};

export default animations;
