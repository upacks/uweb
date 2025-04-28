import * as maptalks from 'maptalks'

class SkyLayer extends maptalks.Layer {

  colors: any

  setColors(colors: any) {
    this.colors = colors
    return this
  }

  getColors() {
    return this.colors
  }

}

//定义默认的图层配置属性
SkyLayer.mergeOptions({ colors: ["#82AACB", "#CBD9E2"], zIndex: -Infinity })

class SkyLayerRenderer extends maptalks.renderer.CanvasRenderer {

  checkResources() { /* HelloLayer只是绘制文字, 没有外部图片, 所以返回空数组 */ return [] }

  draw() { this._drawSky(); this.completeRender(); }

  drawOnInteracting(evtParam: any) { this._drawSky() }

  _drawSky() {

    const layer = this.layer
    if (!layer) return
    const map = layer.getMap();
    let height = map.getContainerExtent().ymin;

    if (height > 0) {
      const r = map.getDevicePixelRatio();
      const width = map.width * r;
      height += 30;
      height *= r;
      this.prepareCanvas();
      const ctx = this.context;
      const colors = layer.colors || layer.options.colors;
      if (colors) {
        const [c1, c2] = colors;
        const grd = ctx.createLinearGradient(width / 2, 0, width / 2, height);
        grd.addColorStop(0, c1);
        // grd.addColorStop(0.5, c2);
        grd.addColorStop(1, c2);
        layer.skyFill = grd;
      }

      if (!layer.skyFill) return
      ctx.fillStyle = layer.skyFill
      ctx.fillRect(0, 0, width, height)

    }

  }
}

SkyLayer.registerRenderer("canvas", SkyLayerRenderer)

export const skyLayer = new SkyLayer('sky', { zIndex: -Infinity })