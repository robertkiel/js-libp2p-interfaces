var streamPair = require('stream-pair')
var devNull = require('dev-null')
var bytesStream = require('random-bytes-stream')

module.exports.all = function (test, common) {

  test('1 stream with 64Mb file', function (t) {
    common.setup(test, function (err, Muxer) {
      t.ifError(err, 'should not throw')
      var pair = streamPair.create()

      spawnGeneration(t, Muxer, pair, pair.other, 1, [10, 10])
    })
  })
}

function spawnGeneration (t, Muxer, dialerSocket, listenerSocket, nStreams, sizeWindow) {

}

// function randSizeMsg (sizeWindow) {
//   return Math.floor(Math.random() * (sizeWindow[1] - sizeWindow[0] + 1)) + sizeWindow[0]
// }

// tests list:
// SubtestStress1Conn1Stream1Msg
// SubtestStress1Conn1Stream100Msg
// SubtestStress1Conn100Stream100Msg
// SubtestStress1Conn1000Stream10Msg
// SubtestStress1Conn1000Stream100Msg10MB

