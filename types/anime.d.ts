
export type AnimeField = 'translateX' | 'translateY' | 'translateZ' | 'rotate' | 'rotateX' | 'rotateY' | 'rotateZ' | 'scale' | 'scaleX' | 'scaleY' | 'scaleZ' | 'skew' | 'skewX' | 'skewY' | 'perspective' | 'matrix' | 'matrix3d'|'opacity'

export type AnimeParams = {
    targets: Ref<HTMLElement | null>;
    duration?: number;
    delay?: number;
    endDelay?: number;
    elasticity?: number;
    round?: number;
    loop?: number;
    autoplay?: boolean;
    direction?: string;
    easing?: anime.EasingOptions;
} & {
        [key in AnimeField]?: any;
    }


