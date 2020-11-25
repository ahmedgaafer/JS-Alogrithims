const { withTry, _dijkstraAStar }  = require('../Helpers/index');

const AStar = withTry((graph, start, end) => _dijkstraAStar(graph, start, end, true));

module.exports = AStar;