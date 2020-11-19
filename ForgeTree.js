$(document).ready(function () {
  prepareAppBucketTree();
  $('#refreshBuckets').click(function () {
    $('#appBuckets').jstree(true).refresh();
  });
});

function prepareAppBucketTree() {
  $('#appBuckets')
    .jstree({
      core: {
        themes: { icons: true },
        data: {
          url: 'https://wsp-forge-app.herokuapp.com/api/forge/oss/bucketTree',
          dataType: 'json',
          multiple: false,
          data: function (node) {
            return { id: node.id };
          },
        },
      },
      types: {
        default: {
          icon: 'glyphicon glyphicon-question-sign',
        },
        '#': {
          icon: 'glyphicon glyphicon-cloud',
        },
        bucket: {
          icon: 'glyphicon glyphicon-folder-open',
        },
        object: {
          icon: 'glyphicon glyphicon-file',
        },
      },
      plugins: ['types', 'state', 'sort', 'contextmenu'],
    })
    .on('loaded.jstree', function () {
      $('#appBuckets').jstree('open_all');
    })
    .bind('activate_node.jstree', function (evt, data) {
      if (data != null && data.node != null && data.node.type == 'object') {
        $('#forgeViewer').empty();
        var urn = data.node.id;
        launchViewer(urn);
      }
    });
}
