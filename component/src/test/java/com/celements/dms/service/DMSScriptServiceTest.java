package com.celements.dms.service;

import static com.celements.common.test.CelementsTestUtils.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.xwiki.script.service.ScriptService;

import com.celements.common.test.AbstractComponentTest;
import com.xpn.xwiki.web.Utils;

public class DMSScriptServiceTest extends AbstractComponentTest {

  @Test
  public void componentTest() {
    replayDefault();
    assertNotNull(Utils.getComponent(ScriptService.class, "celdms"));
    verifyDefault();
  }

}
