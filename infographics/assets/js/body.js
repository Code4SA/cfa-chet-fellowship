$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

<div class="row">

<div class="col-xs-12 col-sm-6 vcenter">
<a href="{{image-url}}" data-lightbox="{{clean title}}-lightbox"><img src="{{thumbnail-url}}" width=100% style="border-radius: 4px"></a>
</div><!--    
--><div class="col-xs-12 col-sm-6 vcenter">
      <div class="well">
        <h4>
          {{title}}
        </h4>
        <div class="share-buttons hidden-xs">

          <a title="Copy URL" data-clipboard-text="code4sa.org/cfa-chet-fellowship/infographics/#{{category-id}}-{{clean title}}" href="javascript:void(0);" type="button" class="btn btn-default share share-left copy" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-link fa-fw"></i></a>

          <a href="https://www.facebook.com/sharer/sharer.php?u=code4sa.org/cfa-chet-fellowship/infographics/doctoral-education.html%23{{clean title}}" target="_blank" type="button" class="btn btn-default share share-middle" data-toggle="tooltip" title="Share on Facebook" data-placement="bottom"><i class="fa fa-facebook fa-fw"></i></a>

          <a href="https://twitter.com/home?status=code4sa.org/cfa-chet-fellowship/infographics/doctoral-education.html%23{{clean title}}" target="_blank" type="button" class="btn btn-default share share-right" data-toggle="tooltip" title="Share on Twitter" data-placement="bottom"><i class="fa fa-twitter fa-fw"></i></a>
        </div>

        <table class="table table-condensed" style="margin-bottom: 0px;">
          <tbody>
            <tr>
              {{#if data-source}}
              <td class="col-xs-3" style="border-top-width: 0px;">Data source</td>
              {{/if}}
              {{#if data-source-url}}
              <td class="source" style="border-top-width: 0px;"><a href="{{{data-source-url}}}" target="_blank">{{data-source}}</a></td>
              {{else}}
              <td style="border-top-width: 0px;">{{data-source}}</td>
              {{/if}}
            </tr>
            {{#if compiled-by}}
            <tr>
              <td class="col-xs-3">Compiled by</td>
              <td>{{compiled-by}}</td>
            </tr>
            {{/if}}
            {{#if designed-by}}
            <tr>
              <td class="col-xs-3">Designed by</td>
              <td>{{designed-by}}</td>  
            </tr>
            {{/if}}
            {{#if date}}
            <tr>
              <td class="col-xs-3">Date</td>
              <td>{{date}}</td>
            </tr>
            {{/if}}
            {{#if license}}      
            <tr>
              <td class="col-xs-3">License</td>
              <td>{{license}}</td>
            </tr>
            {{/if}}      
          </tbody>
        </table>
        {{#if description-or-table}} 
          <p style="margin-top: 10px; margin-bottom: 5px; display:inline;">
            {{#if table}}
              <a class="btn" data-toggle="collapse" href="#{{clean title}}-data">Data table <i class="fa fa-caret-down"></i></a>
            {{/if}}
            {{#if description}}
              <a class="btn" data-toggle="collapse" href="#{{clean title}}-description">Description <i class="fa fa-caret-down"></i></a>
            {{/if}}
          </p>

          <p class="share-buttons-small hidden-sm hidden-md hidden-lg">
            <a title="Copy URL" data-clipboard-text="code4sa.org/cfa-chet-fellowship/infographics/#{{category-id}}-{{clean title}}" href="javascript:void(0);" type="button" class="btn btn-default share-small share-left-small copy" data-toggle="tooltip" data-placement="top"><i class="fa fa-link fa-fw"></i></a>

            <a href="https://www.facebook.com/sharer/sharer.php?u=code4sa.org/cfa-chet-fellowship/infographics/doctoral-education.html%23{{clean title}}" target="_blank" type="button" class="btn btn-default share-small share-middle-small" data-toggle="tooltip" title="Share on Facebook" data-placement="top"><i class="fa fa-facebook fa-fw"></i></a>

            <a href="https://twitter.com/home?status=code4sa.org/cfa-chet-fellowship/infographics/doctoral-education.html%23{{clean title}}" target="_blank" type="button" class="btn btn-default share-small share-right-small" data-toggle="tooltip" title="Share on Twitter" data-placement="top"><i class="fa fa-twitter fa-fw"></i></a>
          </p>
        {{/if}}
      </div>
    </div>

{{#if description-or-table}} 

    <div class="row">

<div class="panel-group">
<div class="panel panel-default panel-table">

{{#if description}}
<div id="{{clean title}}-description" class="panel-collapse collapse" >
<div class="panel-body">
<blockquote>
  <p>{{description}}</p>
      {{#if data-source-url}}
  <p>Source: <a href="{{{data-source-url}}}" target="_blank">{{data-source}}</a></p>
        {{else}}
  <p>Source: {{data-source}}</p>
        {{/if}}
</blockquote>
</div>
</div>
{{/if}}

<div id="{{clean title}}-data" class="panel-collapse collapse">
<div class="panel-body">

{{#if table}}
<p>
<table id="{{clean title}}-table" class="table table-hover">
{{{table}}}
<a id="dlink" style="display:none;"></a><a class="btn" onclick="tableToExcel('{{clean title}}-table', '{{title}}.xls')" value="Export to Excel"><i class="fa fa-download"></i> Download data table</a>
<p>
{{/if}}

</div>
</div>

</div>
</div>

    </div>
{{/if}}

{{#if description-or-table}} 
<hr>
{{else}}
<hr style="margin-top: 20px">
{{/if}}