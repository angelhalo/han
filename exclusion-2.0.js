function Hanlinks(){
}
//inclusive ���w�B�z�����A��L���B�z
//exclusion �ư��B�z�����A��L�B�z
//�o����ܼƥu��]�m�@�ӡA�Y��Ӭҳ]�m�A�u��inclusive���ġC
//�]�m���e��document.location.pathname�A�p
//   "/showeudc.html","/dir1/dir2/*"
//�i����*���ܦh���ɮ�
Hanlinks.inclusive =new Array(
);
Hanlinks.exclusion =new Array(
);
// ��J�k�����A���ݭn���N�]���ŭȡF�Ĥ@�Ӥ������o���ŭȡA
// ��L�̦����`���B�ܾe�B���e'ph.png', 'cj.png','sk.png'
Hanlinks.imeIcon = new Array('eudc.png', 'ph.png', 'cj.png','');

// ��ܿù��p��L, Android�|�۰ʶ}�ҡA�Y�]���_�A�hHanlinks.keyboardSize�]�w�L��
Hanlinks.withKeyboard=false;

// �ù��p��L�j�p�G1~3�A1:24px/cell, 2:36px/cell, 3:48px/cell
// �Y��1�AAndroid�۰ʳ]��2
Hanlinks.keyboardSize = 1;

// ���B�z��J���A�Y���u�A�hHanlinks.withoutInput�]�w�L��
Hanlinks.ignoreField=false;

// ���n��J�k
Hanlinks.withoutInput=false;

// Content-Length �̤j����, 0���ܵL����
Hanlinks.maxContentLength=0;

// ���r��J�\�઺�������ACtrl +����
Hanlinks.ctrlAndKey="Y";

// �ιϧ�������r
Hanlinks.showImage = false;

// �����Ҧ��A���զ������r�\��Q�I�s����
Hanlinks.debugMode = false;

// �`�O������r�ءAIOS/Android�|�۰ʶ}��
Hanlinks.allwaysShowEUDC=true;

// �U����ӳy�r��
Hanlinks.downloadAllFonts = true;

// ���ɦW��requestString code=xxxx���N�A�ιϧ�������r�~���v�T
Hanlinks.imageRequesString = true;

// ��J���Yalt�ݩʦ����r�h��ܩʮM�����r�B�z
Hanlinks.alt = 'webfont';

// ��J���Y��alt�ݩʫh�ư��Υ[�J�M�����r�B�z�Atrue���ư��Afalse���[�J
Hanlinks.altExclusion=false;

// ��J���Y��alt�ݩʡAURI�Ĥ@�Ӹ��|�����H�U�r��h�P�W�z����ۤϡC
Hanlinks.altContexts =new Array(
);

// ��JUnicode���r���ɡAĵ�ܪ���r����
Hanlinks.Notice="���I��<���r��J>�Ҧ���J�A�Y�L�����r�гz�L�u���q��\n�١v���X���r�y�r�ӽСA���¡C";

// �y�r�X�R
Hanlinks.expension = false;

Hanlinks.onlyBig5 = true;

Hanlinks.ImeAttachParent = true;
