import olMap from 'ol/Map.js';
import olLayerTile from 'ol/layer/Tile.js';

describe('ngeo.map.BackgroundLayerMgr', () => {
  let ngeoBackgroundLayerMgr;
  let map;

  beforeEach(() => {
    angular.mock.inject((_ngeoBackgroundLayerMgr_) => {
      ngeoBackgroundLayerMgr = _ngeoBackgroundLayerMgr_;
    });

    map = new olMap({});
  });

  describe('#set', () => {

    it('sets the background layer #1', () => {
      const layer = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, layer);
      expect(map.getLayers().item(0)).toBe(layer);
    });

    it('sets the background layer #2', () => {
      map.addLayer(new olLayerTile());
      const layer = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, layer);
      expect(map.getLayers().getLength()).toBe(2);
      expect(map.getLayers().item(0)).toBe(layer);
    });

    it('sets the background layer #3', () => {
      const layer1 = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, layer1);
      const layer2 = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, layer2);
      expect(map.getLayers().getLength()).toBe(1);
      expect(map.getLayers().item(0)).toBe(layer2);
    });

    it('unsets the background layer', () => {
      const layer = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, layer);
      ngeoBackgroundLayerMgr.set(map, null);
      expect(map.getLayers().getLength()).toBe(0);
    });

  });

  describe('#get', () => {

    it('returns `null` if no background layer', () => {
      const layer = ngeoBackgroundLayerMgr.get(map);
      expect(layer).toBe(null);
    });

    it('returns the current background layer', () => {
      const expectedLayer = new olLayerTile();
      ngeoBackgroundLayerMgr.set(map, expectedLayer);
      const layer = ngeoBackgroundLayerMgr.get(map);
      expect(layer).toBe(expectedLayer);
    });
  });

});
