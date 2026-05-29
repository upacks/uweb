declare const _exports: {
    new ({ alignment: t, backgroundColor: e, color: i, fontFamily: n, fontSize: o, fontStyle: r, fontVariant: l, fontWeight: a, lineGap: s, padding: h, strokeColor: c, strokeWidth: f, text: d }?: {
        alignment?: string | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontVariant?: string | undefined;
        fontWeight?: string | undefined;
        lineGap?: number | undefined;
        padding?: number | undefined;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        text?: string | undefined;
    }): {
        [x: string]: any;
        readonly lines: any;
        readonly font: string;
        checkFontFace(): boolean;
        loadFontFace(): Promise<void>;
        createDrawable(): {
            width: number;
            height: any;
            draw(r: any): void;
        };
        isTextTexture: boolean;
        isDynamicTexture: boolean;
    };
};
export = _exports;
//# sourceMappingURL=three.texture.d.ts.map