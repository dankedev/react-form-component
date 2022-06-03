module.exports = class Ripple {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    findFurthestPoint(
        clickPointX,
        elementWidth,
        offsetX,
        clickPointY,
        elementHeight,
        offsetY,
    ) {
        this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
        this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
        this.z = Math.hypot(
            this.x - (clickPointX - offsetX),
            this.y - (clickPointY - offsetY),
        );

        return this.z;
    }


    appyStyles(element, color,type, rect, radius, event) {
        let rippleColor ={
            'blue':'bg-blue-400',
            'light-blue':'bg-blue-200',
            'green':'bg-green-400',
            'light-green':'bg-green-300',
            'lime':'bg-button-lime',
            'red':'bg-red-400',
            'pink':'bg-red-200',
            'purple':'bg-purple-300',
            'deep-purple':'bg-purple-400',
            'teal':'bg-button-teal',
            'yellow':'bg-yellow-300',
            'amber':'bg-amber-300',
            'orange':'bg-orange-300',
            'deep-orange':'bg-orange-400',
        }

        element.classList.add('ripple');
        if (type ==='contained'){
            element.style.backgroundColor =
                color ==='yellow' ? 'rgba(255,255,255,0.5)': 'rgba(255,255,255, 0.4)';
        }else{
            element.classList.add(rippleColor[color]);
            if (['light-green','lime','yellow','teal'].includes(color)){
                element.classList.add('bg-opacity-50')
            }
        }

        element.style.backgroundColor =
        element.style.borderRadius = '50%';
        element.style.pointerEvents = 'none';
        element.style.position = 'absolute';
        element.style.left = event.clientX - rect.left - radius + 'px';
        element.style.top = event.clientY - rect.top - radius + 'px';
        element.style.width = element.style.height = radius * 2 + 'px';
    }

    applyAnimation(element) {
        element.animate(
            [
                {
                    transform: 'scale(0)',
                    opacity: 1,
                },
                {
                    transform: 'scale(1.5)',
                    opacity: 0,
                },
            ],
            {
                duration: 500,
                easing: 'linear',
            },
        );
    }

    create(event, color,type='contained') {
        const element = event.currentTarget;

        // element.style.position = 'relative';
        // element.style.overflow = 'hidden';

        const rect = element.getBoundingClientRect();

        const radius = this.findFurthestPoint(
            event.clientX,
            element.offsetWidth,
            rect.left,
            event.clientY,
            element.offsetHeight,
            rect.top,
        );

        const circle = document.createElement('span');

        this.appyStyles(circle, color, type,rect, radius, event);
        this.applyAnimation(circle);

        element.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    }
};
