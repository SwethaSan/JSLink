<script type="text/javascript">
(function () {
var requestCtx = {};
requestCtx.Templates = {};
requestCtx.Templates.Fields = {
    'CustomLink': {'View': linkFieldTemplate},
    'ColoredTitle':{'View': titleFieldTemplate}     
};
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(requestCtx);
})();
function linkFieldTemplate(ctx) {
var id = ctx.CurrentItem["ID"];
return "<a href='https://lspug.sharepoint.com/sites/fun/Lists/Workflow%20History/AllItems.aspx?FilterField1=Item&FilterValue1="+id+"'>Link to Approval Workflow History</a>";
}
function titleFieldTemplate(ctx){
//var name = ctx.CurrentItem["FileLeafRef"];
var title=ctx.CurrentItem["Title"];
return "<span style='color :#FFD700'><b>"+title+"</b></span>";
    
}
</script>