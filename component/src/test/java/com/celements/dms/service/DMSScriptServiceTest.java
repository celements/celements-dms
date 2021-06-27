package com.celements.dms.service;

import static com.celements.common.test.CelementsTestUtils.*;
import static org.easymock.EasyMock.*;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.xwiki.script.service.ScriptService;
import org.xwiki.test.AbstractComponentTestCase;

import com.xpn.xwiki.XWiki;
import com.xpn.xwiki.XWikiContext;
import com.xpn.xwiki.web.Utils;

public class DMSScriptServiceTest extends AbstractComponentTestCase {

  private XWiki xwiki;
  private XWikiContext context;

  @Before
  public void setUp_DMSScriptServiceTest() throws Exception {
    xwiki = createMock(XWiki.class);
    context = getContext();
    context.setWiki(xwiki);
  }

  @Test
  public void componentTest() {
    replayDefault();
    assertNotNull(Utils.getComponent(ScriptService.class, "celdms"));
    verifyDefault();
  }

}
