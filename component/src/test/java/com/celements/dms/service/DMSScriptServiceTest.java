package com.celements.dms.service;


import static org.easymock.EasyMock.*;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.xwiki.script.service.ScriptService;

import com.celements.common.test.AbstractBridgedComponentTestCase;
import com.xpn.xwiki.XWiki;
import com.xpn.xwiki.XWikiContext;
import com.xpn.xwiki.web.Utils;

public class DMSScriptServiceTest extends AbstractBridgedComponentTestCase {

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
    replayAll();
    assertNotNull(Utils.getComponent(ScriptService.class, "celdms"));
    verifyAll();
  }

  //*************************************************************************************
  // HELPER
  //*************************************************************************************

  
  private void replayAll(Object ... mocks) {
    replay(xwiki);
    replay(mocks);
  }

  private void verifyAll(Object ... mocks) {
    verify(xwiki);
    verify(mocks);
  }

}
