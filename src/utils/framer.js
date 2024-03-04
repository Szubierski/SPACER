const animations = {
	topEntryHeader: {
		hidden: {
			opacity: 1,
			y: "-10px",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1,
				duration: 0.5,
				type: "spring",
			},
		},
	},
	topEntryText: {
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
	bottomEntryText: {
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
	topEntryInput: {
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
	topEntryButton: {
		hidden: {
			opacity: 0,
			y: "-100px",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.7,
				duration: 0.5,
				type: "spring",
			},
		},
	},
};

export default animations;
