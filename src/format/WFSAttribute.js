/**
 * @module ngeo.format.WFSAttribute
 */
import googAsserts from 'goog/asserts.js';
import ngeoFormatAttribute from 'ngeo/format/Attribute.js';
import ngeoFormatAttributeType from 'ngeo/format/AttributeType.js';

const exports = class {


  /**
   * A format that reads the complexType from a WFS DescribeFeatureType
   * response for a single set of attributes and return an array of
   * `ngeox.Attribute`.
   */


  /**
   * @param {Array.<Object>} complexTypeElements Complex type element
   * @return {Array.<ngeox.Attribute>} Attributes
   */
  read(complexTypeElements) {
    return complexTypeElements.map(this.readFromComplexTypeElement_);
  }


  /**
   * @param {Object} object Complex type element
   * @return {ngeox.Attribute} Attribute
   * @private
   */
  readFromComplexTypeElement_(object) {

    const name = googAsserts.assertString(object['name']);
    const alias = 'alias' in object ?
      googAsserts.assertString(object['alias']) : null;
    const required = object['minOccurs'] != '0';

    const attribute = {
      name,
      alias,
      required
    };

    const type = googAsserts.assertString(object['type']);

    if (!ngeoFormatAttribute.setGeometryType(attribute, type)) {
      if (type === 'gml:TimeInstantType') {
        attribute.type = ngeoFormatAttributeType.DATETIME;
      } else if (type === 'double') {
        attribute.type = ngeoFormatAttributeType.NUMBER;
      } else {
        attribute.type = ngeoFormatAttributeType.TEXT;
      }
    }

    return attribute;
  }

};


export default exports;
