Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  xsWidth: _types.ColumnSizeType,
  smWidth: _types.ColumnSizeType,
  mdWidth: _types.ColumnSizeType,
  lgWidth: _types.ColumnSizeType,
  xsHeight: _types.ColumnSizeType,
  smHeight: _types.ColumnSizeType,
  mdHeight: _types.ColumnSizeType,
  lgHeight: _types.ColumnSizeType,
  xsXOffset: _propTypes2.default.number,
  smXOffset: _propTypes2.default.number,
  mdXOffset: _propTypes2.default.number,
  lgXOffset: _propTypes2.default.number,
  xsYOffset: _propTypes2.default.number,
  smYOffset: _propTypes2.default.number,
  mdYOffset: _propTypes2.default.number,
  lgYOffset: _propTypes2.default.number, 
  xsZ: _propTypes2.default.number,
  smZ: _propTypes2.default.number,
  mdZ: _propTypes2.default.number,
  lgZ: _propTypes2.default.number,
  

  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var classMap = {
  xsWidth: 'col-width-xs',
  smWidth: 'col-width-sm',
  mdWidth: 'col-width-md',
  lgWidth: 'col-width-lg',
  xsHeight: 'col-height-xs',
  smHeight: 'col-height-sm',
  mdHeight: 'col-height-md',
  lgHeight: 'col-height-lg',
  xsXOffset: 'col-x-xs-offset',
  smXOffset: 'col-x-sm-offset',
  mdXOffset: 'col-x-md-offset',
  lgXOffset: 'col-x-lg-offset',
  xsYOffset: 'col-y-xs-offset',
  smYOffset: 'col-y-sm-offset',
  mdYOffset: 'col-y-md-offset',
  lgYOffset: 'col-y-lg-offset',
  xsZ: 'col-z-xs',
  smZ: 'col-z-sm',
  mdZ: 'col-z-md',
  lgZ: 'col-z-lg',
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames2.default)('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames2.default)('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, ['tagName']);

  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;