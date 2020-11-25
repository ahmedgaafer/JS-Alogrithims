const { withTry, _dijkstraAStar }  = require('../Helpers/index');

const Dijkstra = withTry((graph, start, end) => _dijkstraAStar(graph, start, end, false));

module.exports = Dijkstra;